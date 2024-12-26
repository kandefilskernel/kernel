import fs from "fs";
import matter from "gray-matter";

const generateContent = (slug, name, shortId) => {
  const path = "C:/fileserver/markdowns/";
  const file = `${path}${slug + "/"}${shortId + ". "}${name}.md`;

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export default generateContent;