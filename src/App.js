import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./Component/Layout/MainLayout";
import AddClaimRelease from "./Pages/AddClaimRelease";
import Analytics from "./Pages/Analytics";
import ApprovedCatalog from "./Pages/ApprovedCatalog";
import ArtistChannelRequest from "./Pages/ArtistChannelRequest";
import AudioSubmission from "./Pages/AudioSubmission";
import CallerTune from "./Pages/CallerTune";
import CatalogDetails from "./Pages/CatalogDetails";
import ContentIdRequest from "./Pages/ContentIdRequest";
import Dashboard from "./Pages/Dashboard";
import DraftCatalog from "./Pages/DraftCatalog";
import EditPrimaryArtist from "./Pages/EditPrimaryArtist";
import LabelManage from "./Pages/LabelManage";
import LogIn from "./Pages/LogIn";
import Overview from "./Pages/Overview";
import PendingCatalog from "./Pages/PendingCatalog";
import PrimaryArtistManage from "./Pages/PrimaryArtistManage";
import Profile from "./Pages/Profile";
import ReleaseAudio from "./Pages/ReleaseAudio";
import SupportCenter from "./Pages/SupportCenter";
import WithdrawA from "./Pages/WithdrawA";

import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="release-audio" element={<ReleaseAudio />} />
              <Route path="approved" element={<ApprovedCatalog />} />
              <Route path="draft" element={<DraftCatalog />} />
              <Route path="pending" element={<PendingCatalog />} />
              <Route path="analytics" element={<Analytics />} />
              <Route
                path="primary_artist_manage"
                element={<PrimaryArtistManage />}
              />
              <Route path="add_claim_release" element={<AddClaimRelease />} />
              <Route path="content_id_request" element={<ContentIdRequest />} />
              <Route
                path="artist_channel_request"
                element={<ArtistChannelRequest />}
              />
              <Route path="overview" element={<Overview />} />
              <Route path="withdraw" element={<WithdrawA />} />
              <Route path="audio_submission" element={<AudioSubmission />} />
              <Route
                path="edit_primary_artist"
                element={<EditPrimaryArtist />}
              />
              <Route path="catalog_details" element={<CatalogDetails />} />
              <Route path="support_center" element={<SupportCenter />} />
              <Route path="label_manage" element={<LabelManage />} />
              <Route path="profile" element={<Profile />} />
              <Route path="caller_tune" element={<CallerTune />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
