import { async } from "@firebase/util";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { storage } from '~/firebase';

export const uploadImages = async (categoryName, images) => {
    if (images == null) return;
    return new Promise((resolve, reject) => {
        const urls = [];
        images.map(async (image) => {
            //temp
            const imageName = Math.random().toString(36).substring(2, 9);
            const imageRef = ref(storage, `${categoryName}/${imageName}`);
            const snapshot = await uploadBytes(imageRef, image)
            const url = await getDownloadURL(snapshot.ref);
            console.log(url)
            urls.push(url);

        });
        resolve(urls);
    });
}
    // images.map(async (image) => {
    //     //temp
    //     const imageName = Math.random().toString(36).substring(2, 9);
    //     const imageRef = ref(storage, `${categoryName}/${imageName}`);
    //     uploadBytes(imageRef, image).then((snapshot) => {
    //         const promise = new Promise(async (resolve, reject) => {
    //             const url = await getDownloadURL(snapshot.ref)
    //             resolve(url);
    //         })
    //         promises.push(promise);
    //         // promises.push(getDownloadURL(snapshot.ref));
    //         // getDownloadURL(snapshot.ref).then((url) => {
    //         //     console.log(url)
    //         //     urls.push(url);
    //         // });
    //     });

    // });

    // console.log(promises); //output có dạng [ Promise { "pending" }, Promise { "pending" } ...]

    // //Promise.all sẽ đợi cho đến khi tất cả các promises được giải quyết 
    // Promise.all(promises)
    //     .then(response => console.log(urls))


