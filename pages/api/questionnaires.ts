// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { BlobServiceClient } from "@azure/storage-blob";
import {
  isQuestionnaire,
  WorkType,
} from "../../lib/interfaces/GettingStartedQuestionnaire.interface";

const CONTAINER_NAME = "questionnaires";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;

  // A connection string must be provided.
  if (!AZURE_STORAGE_CONNECTION_STRING) {
    res.status(500).send("I was not able to save your questionnaire.");
    throw Error("Azure storage connection string was not provided.");
  }

  if (req.method === "POST") {
    // Check if the body is correct.
    if (!isQuestionnaire(req.body)) {
      res.status(400).send("Questionnaire is not valid.");
      return;
    }

    // Create the BlobServiceClient object which will be used to create a container client.
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );

    // Get a reference to the container, or create it if it doesn't exist.
    // prettier-ignore
    const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
    await containerClient.createIfNotExists();

    // Get a client for the block blob.
    const blobName = `questionnaire-${Date.now()}-${req.body.id}.txt`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Format the data.
    const rawData = req.body;
    const data = `--- Questionnaire for ${rawData.id}
Note: Check blob meta data for information on submission dates and time.

Name: ${rawData.name ?? "(No name given)"}
Organization: ${rawData.orgName ?? "(No org name given)"}
Main Contact: ${rawData.mainContact}
Work Type: ${WorkType[rawData.workType]}

--- Description:
${rawData.workDescription}

--- Additional Information:
${rawData.workAdditionalInfo}
    `;

    // Upload the data.
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(
      `${uploadBlobResponse.requestId} ${blobName} : questionnaire submitted`
    );

    res.status(200).send(uploadBlobResponse.requestId);
  }
}
