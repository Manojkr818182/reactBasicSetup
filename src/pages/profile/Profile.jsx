import React, { useEffect, useState } from "react";
import {
  Avatar, Button, Card, CardContent, Grid,
  Typography, TextField
} from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userDetail } = useSelector((state) => state.auth);
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "",
    bio: "",
    email: "",
  });

  useEffect(() => {
    if (userDetail) {
      console.log(userDetail)
      setUser({
        name: userDetail.name || " MNJ",
        bio: userDetail.bio || "",
        email: userDetail.email || "",
      });
    }
  }, [userDetail]); // Runs whenever userDetail changes

  const handleEditToggle = () => setEditing(!editing);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Card sx={{ width: 420, p: 3, textAlign: "center", boxShadow: 3 }}>
        <Avatar
          sx={{ width: 100, height: 100, margin: "auto" }}
          src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
          alt="User Avatar"
        />
        <CardContent>
          {editing ? (
            <>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </>
          ) : (
            <>
              <Typography variant="h5">{user.name}</Typography>
              <Typography color="textSecondary">{user.bio}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{user.email}</Typography>
            </>
          )}
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleEditToggle}
          >
            {editing ? "Save" : "Edit Profile"}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Profile;
