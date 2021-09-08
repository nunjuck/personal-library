import { notionApi } from "../config/constants";

export class fetchRequest {
  static async get(path) {
    return await fetch(path, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
        "Notion-Version": notionApi.version,
        "Content-Type": "Content-Type: application/json",
      },
    });
  }

  static async post(path, data) {
    return await fetch(path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
        "Notion-Version": notionApi.version,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
