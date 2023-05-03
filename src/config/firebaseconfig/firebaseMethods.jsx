import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, set, ref, onValue, push } from "firebase/database";
import app from "../firebaseconfig/firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);

let SignUpUser = (obj) => {
  console.log("obj", obj);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.uid = res.user.uid;
        const reference = ref(db, `users/${obj.uid}`);
        set(reference, obj)
          .then(() => {
            resolve("Data Sent Successfully anf User Created Succesfully ");
          })
          .catch((err) => {
            reject(err.message);
          });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
let LoginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `users/${res.user.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

let checkAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
        localStorage.setItem("userId", uid);
        resolve(uid);
      } else {
        reject("User Not Logged In");
      }
    });
  });
};

let userLogOut = () => {
  return signOut(auth)
    .then((res) => {
      console.log("User Logged Out Succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

let getFBData = (nodeName, id) => {
  let reference = ref(db, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(reference, (dt) => {
      if (dt.exists()) {
        if (id) {
          resolve(dt.val());
        } else {
          resolve(Object.values(dt.val()));
        }
      } else {
        reject("no Data Found");
      }
    });
  });
};
let postFBData = (nodeName, obj, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      let reference = ref(db, `${nodeName}/${id ? id : ""}/`);
      set(reference, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      let keyRef = ref(db, `${nodeName}`);
      obj.id = push(keyRef).key;
      let postRef = ref(db, `${nodeName}/${obj.id}`);
      set(postRef, obj);
    }
  });
};

let editFBData = () => {};
let deleteFBData = () => {};

export {
  SignUpUser,
  LoginUser,
  userLogOut,
  getFBData,
  postFBData,
  editFBData,
  deleteFBData,
  checkAuth,
};
