import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '~/firebase';

export const uploadImages = async (categoryName, images) => {
  if (images == null) return;
  return new Promise((resolve, reject) => {
    const urls = [];
    images.map(async (image) => {
      const imageName = Math.random().toString(36).substring(2, 9);
      const imageRef = ref(storage, `${categoryName}/${imageName}`);
      const snapshot = await uploadBytes(imageRef, image);
      const url = await getDownloadURL(snapshot.ref);
      urls.push(url);
    });
    resolve(urls);
  });
};
