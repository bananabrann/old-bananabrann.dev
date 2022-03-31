import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

/**
 * This API provides an easy way to access an alphabetized skills list
 * anywhere an API can be called.
 *
 * Not used by the Next.js website.
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const techListFile = "tech.txt";
  const dir = path.resolve("./public", techListFile);
  let techListAlphabetized: Array<string> = [];

  /**
   * Synchronously retrieves and constructs an alphabetized list of
   * technologies.
   */
  try {
    techListAlphabetized = fs.readFileSync(dir).toString().split("\n").sort();

    res.status(200).json({ tech: techListAlphabetized });
  } catch (error: any) {
    /**
     * NOTE -- For a list of common system errors, see
     * https://nodejs.org/api/errors.html#common-system-errors
     */
    const errorCode: string | null = error?.code ?? null;

    /**
     * File was not found.
     */
    if (errorCode === "ENOENT") {
      console.error(error?.message);
      res.status(404).send(`Source list "${techListFile}" not found.`);
    }

    /**
     * Unknown error occured.
     */
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}
