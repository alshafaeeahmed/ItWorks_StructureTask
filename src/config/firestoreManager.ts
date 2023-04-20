export const addFileToCollection = async (collection: string, file: any) => {
  try {
    await firestore().collection(collection).add(file);
  } catch (error) {
    console.log(error);
  }
};
