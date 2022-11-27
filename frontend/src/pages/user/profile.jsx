import { Divider, Stack, Chip, Box, CircularProgress } from '@mui/material';
import React from 'react';
import MDTypography from '../../components/MDTypography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import UserPage from './user-page';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import userThunk from '../../features/user/user.service';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(userThunk.showProfileAPI())
      .unwrap()
      .then((value) => {
        setProfile(value.user);
        console.log(value.user);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <UserPage>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ paddingLeft: '10px' }}
          >
            <MDTypography
              sx={{ color: '#444444' }}
              fontWeight="medium"
              variant="h5"
            >
              Hồ sơ của tôi
            </MDTypography>
            <MDTypography
              sx={{ color: '#444444', fontSize: '0.875rem' }}
              fontWeight="regular"
              variant="subtitle1"
            >
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </MDTypography>
          </Stack>

          <Divider sx={{ width: '100%' }} />
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
              >
                <MDTypography
                  sx={{ color: '#999999', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  Tên:
                </MDTypography>
                <MDTypography
                  sx={{ color: '#999999', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  Email:
                </MDTypography>
                <MDTypography
                  sx={{ color: '#999999', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  Số điện thoại:
                </MDTypography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <MDTypography
                  sx={{ color: '#444444', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  {profile ? `${profile.lastName} ${profile.firstName}` : null}
                </MDTypography>
                <MDTypography
                  sx={{ color: '#444444', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  {profile.email ? profile.email : null}
                </MDTypography>
                <MDTypography
                  sx={{ color: '#444444', fontSize: '0.875rem' }}
                  fontWeight="regular"
                >
                  {profile.contactNumber
                    ? profile.contactNumber
                    : 'Chưa cập nhật'}
                </MDTypography>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </UserPage>
  );
};

export default ProfilePage;