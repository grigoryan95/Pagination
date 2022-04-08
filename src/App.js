import React, {useState} from "react";
import './App.scss';
import {ErrorPage, RegistrationPage, SignIn, TablePage} from "./pages";
import {Container} from "./component";
import {Routes, Route} from "react-router-dom";
import Table from "./newKarenTaskTableProducts/tablePage/Table";
import TableComponentMaterialUI from "./secondTaskKaren/table/TableComponentMaterial";
import Button from "./secondTaskKaren/button/Button";
import Categories from "./secondTaskKaren/categories/TableComponentMaterial";

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV0ZXJpQGFkbWluLmNvbSIsInJvbGUiOjIsImlhdCI6MTYyMDY2NDA5OCwiZXhwIjoxOTM2MjMzMzU4fQ.XBl0vMNnAyD9a1EjtPGhzdej1BJ9hGO3rhvOxBADAMY
// token

function App() {

    const [page, setPage] = useState(true)
    const changeHandle1 = () => {
        setPage(false)
    }
    const changeHandle2 = () => {
        setPage(true)
    }

    return (
        <div className="App">
            {/*<Table/>*/}

            <Button name="Categories" click={changeHandle1}/>
            <Button name="Products" click={changeHandle2}/>
            {page ? <TableComponentMaterialUI/> : <Categories/>}


            <Routes>
                <Route
                    path="*"
                    element={
                        <ErrorPage/>
                    }/>
                <Route
                    path="/"
                    element={
                        <Container>
                            <RegistrationPage/>
                        </Container>
                    }/>
                <Route
                    path="/sign-in"
                    element={
                        <Container>
                            <SignIn sm={{fontSize: 15}}/>
                        </Container>
                    }/>
                <Route
                    path="/table"
                    element={
                        <TablePage/>
                    }/>
            </Routes>
        </div>
    );
}

export default App;
