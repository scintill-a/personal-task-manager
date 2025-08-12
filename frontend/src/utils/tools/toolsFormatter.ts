export const extractImageName = (imagePath: string): string => {
  const parts = imagePath.split("/");
  const fileName = parts[parts.length - 1];
  return fileName.split(".")[0];
};
