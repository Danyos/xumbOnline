import Box from '@mui/material/Box';
import './App.css'
import {Container, Grid, Paper, styled} from "@mui/material";
import MyBox from "./MyBox";

function App() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
  return (
    <div className="App">

      <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item   xl={2}  md={3} sm={6}  xs={12}>
                        <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6}  xs={12}>
                        <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>   <Grid item   xl={2}  md={3} sm={6}  xs={12}>
                        <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6}  xs={12}>
                        <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
                  <Grid item   xl={2}  md={3} sm={6} xs={12}>
                      <MyBox />
                  </Grid>
              </Grid>
          </Box>
      </Container>
    </div>
  );
}

export default App;
