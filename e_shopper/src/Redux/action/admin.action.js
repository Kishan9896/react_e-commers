import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { ADD_PRODUCT, DELETE_PRODUCTS, EDIT_PRODUCTS, ERROR_PRODUCTS, LOADING_PRODUCTS, READ_PRODUCTS } from "../Actiontype";


// Firebase Read Code
export const ReadProduct = () => async (dispatch) => {

  try {
    let data = [];
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
      console.log(data);
      dispatch({ type: READ_PRODUCTS, payload: data })
      console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (error) {
    // dispatch(ErrorProducts(error.message));
  }
};

// Firebase Add Code
export const AddProducts = (dataIn) => async (dispatch) => {
  console.log(dataIn);
  try {
    const randomNum = Math.floor(Math.random() * 1000000);
    const spaceRef = ref(storage, 'images/' + randomNum);
    uploadBytes(spaceRef, dataIn.Prof_img).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then(async (url) => {
          console.log(url);
          const docRef = await addDoc(collection(db, "Products"), { ...dataIn, Prof_img: url, File_Number: randomNum });
          dispatch({ type: ADD_PRODUCT, payload: { ...dataIn, Prof_img: url, id: docRef.id, } })
        })
      console.log('Uploaded a blob or file!');
    });

  } catch (error) {
    dispatch(ErrorProducts(error.message));
  }
};

export const DeleteProducts = (dataIn) => async (dispatch) => {
  console.log(dataIn);
  try {
    const ProductRef = ref(storage, 'images/' + dataIn.File_Number);
    deleteObject(ProductRef).then(async () => {
      await deleteDoc(doc(db, "Products", dataIn.id));
      dispatch({ type: DELETE_PRODUCTS, payload: dataIn.id })
    }).catch((error) => {
      dispatch(ErrorProducts(error.message));
    });
  } catch (error) {
    dispatch(ErrorProducts(error.message));
  }
};

export const UpdateProducts = (data) => async (dispatch) => {
  console.log(data);
  try {

    if (typeof data.Prof_img === "object") {
      await deleteDoc(doc(db, "Products", data.Prof_img));
      const randomNum = Math.floor(Math.random() * 1000000).toString();
      const spaceRef = ref(storage, 'images/' + randomNum);
      uploadBytes(spaceRef, data.Prof_img).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(async (url) => {
            console.log(url);
            const washingtonRef = doc(db, "Products", data.id);
            await updateDoc(washingtonRef, { ...data, Prof_img: url, randomNum });
            dispatch({ type: EDIT_PRODUCTS, payload: { ...data, Prof_img: url, randomNum } })
          })
      });
    } else {
      const washingtonRef = doc(db, "Products", data.id);
      await updateDoc(washingtonRef, data);
      dispatch({ type: EDIT_PRODUCTS, payload: data })
    }
  } catch (error) {
    dispatch(ErrorProducts(error.message));
  }
};

export const LoadingProducts = () => (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
};

export const ErrorProducts = (error) => (dispatch) => {
  dispatch({ type: ERROR_PRODUCTS, payload: error });
};
