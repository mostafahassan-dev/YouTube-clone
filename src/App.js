import { Box } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navbar, Feed, VideoDetails, SearchFeed, ChannelDetails } from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
          <Route path='/channel/:id' element={<ChannelDetails />}/>
          <Route path='/search/:searchTerm' element={<SearchFeed />}/>
        </Routes>
      </Box>
    </BrowserRouter>
    
  );
}

export default App;
