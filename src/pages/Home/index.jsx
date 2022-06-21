import { Button, Grid } from "@material-ui/core";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  onSnapshotsInSync,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import NavBar from "../../components/NavBar";
import firestore from "../../core/firebase";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [typeForm, setTypeForm] = useState("add");

  const postsCollectionRef = collection(firestore, "posts");

  useEffect(() => {
    onSnapshot(postsCollectionRef, (snapshot) => {
      const _posts = [];
      snapshot.docs.forEach((doc) => {
        const document = { ...doc.data(), id: doc.id };
        _posts.push(document);
      });

      setPosts(_posts);
    });
  }, []);

  const handleEditPost = async ({ title, body }) => {
    const postDoc = doc(firestore, "posts", selectedPost.id);
    await updateDoc(postDoc, { title, body });
    // firestore.collection("posts").doc(selectedPost.id).update({ title, body });
  };

  const handleAddPost = async ({ title, body }) => {
    console.log("entro");
    await addDoc(postsCollectionRef, { title, body });
    // firestore.collection("posts").add({ title, body });
  };

  const handleDeletePost = async (id) => {
    const postDoc = doc(firestore, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <Grid container style={{ width: "100%" }}>
      <NavBar />
      <Grid container>
        <Grid item md={8}>
          {posts.map((post) => (
            <div
              onClick={() => {
                setSelectedPost(post);
                setTypeForm("edit");
              }}
            >
              <h1>
                {post.id} {post.title}
              </h1>
              <Button
                variant="outlined"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </Grid>
        <Grid item md={4}>
          {typeForm === "add" ? (
            <FormPost type="add" onSubmit={handleAddPost} />
          ) : (
            <FormPost {...selectedPost} type="edit" onSubmit={handleEditPost} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
