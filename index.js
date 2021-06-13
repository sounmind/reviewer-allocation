import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import MEMBERS from "./members.js";
import { getReviewGroupByOrinalDay } from "./util.js";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

const createReviewGroupRows = async (members, ordinalDay) => {
  const { codeReviewA, codeReviewB } = getReviewGroupByOrinalDay(
    members,
    ordinalDay
  );

  for (let i = 0; i < members.length; i++) {
    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: members[i],
              },
            },
          ],
        },
        reviewerA: {
          select: {
            name: codeReviewA[i],
          },
        },
        reviewerB: {
          select: {
            name: codeReviewB[i],
          },
        },
      },
    });
  }
};

createReviewGroupRows(MEMBERS, 3);
