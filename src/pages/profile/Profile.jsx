import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userDetail } = useSelector((state) => state.auth);
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "MNJ",
    bio: "",
    email: "",
  });

  useEffect(() => {
    if (userDetail) {
      setUser({
        name: userDetail.name || "",
        bio: userDetail.bio || "",
        email: userDetail.email || "",
      });
    }
  }, [userDetail]);

  const handleEditToggle = () => setEditing((prev) => !prev);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cancelFun = () => {
    setEditing(false);
    if (userDetail) {
      setUser({
        name: userDetail.name || "",
        bio: userDetail.bio || "",
        email: userDetail.email || "",
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 420, p: 3, textAlign: "center", boxShadow: 3 }}>
        <Avatar
          sx={{ width: 100, height: 100, margin: "auto" }}
          src={user?.avatar || "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"}
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
              <Box display="flex" justifyContent="end" mt={2} sx={{ gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditing(false)}
                >
                  Save
                </Button>
                <Button variant="contained" color="secondary" onClick={cancelFun}>
                  Cancel
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h5">{user.name}</Typography>
              <Typography color="textSecondary">{user.bio}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {user.email}
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }} onClick={handleEditToggle}>
                Edit Profile
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
