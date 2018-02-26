import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import StudiesPage from "./pages/StudiesPage";
import StudySeriesPage from "./pages/StudySeriesPage";
import 'semantic-ui-css/semantic.css';
import PatientsPage from "./pages/PatientsPages";
import PluginsPage from "./pages/PluginsPage";
import SeriesViewerPage from "./pages/SeriesViewerPage";
import LoginPage from "./pages/LoginPage";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/studies' component={StudiesPage}/>
            <Route path='/patients' component={PatientsPage}/>
            <Route path='/studies/:id' component={StudySeriesPage}/>
            <Route path='/plugins' component={PluginsPage}/>
            <Route path='/series/:id' component={SeriesViewerPage}/>
            <Route exact path='/' component={LoginPage}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
