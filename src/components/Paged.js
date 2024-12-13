import React from 'react';
import {Route, Routes} from "react-router-dom";
import EnglandPrimer from "./Screens/EnglandPrimer";
import Main from "./Screens/Main";
import SpainPrimer from "./Screens/SpainPrimer";
import GermanyPrimer from "./Screens/GermanyPrimer";
import ItalyPrimer from "./Screens/ItalyPrimer";
import FrancePrimer from "./Screens/FrancePrimer";
import PortugalPrimer from "./Screens/PortugalPrimer";
import EnglandSecondary from "./Screens/EnglandSecondary";
import SpainSecondary from "./Screens/SpainSecondary";
import GermanySecondary from "./Screens/GermanySecondary";
import FranceSecondary from "./Screens/FranceSecondary";
import ItalySecondary from "./Screens/ItalySecondary";
import HollandPrimer from "./Screens/HollandPrimer";
import en_primary_data from "../result/announce_next_tour_en.json"
import es_primary_data from "../result/announce_next_tour_es.json"
import ger_primary_data from "../result/announce_next_tour_ger.json"
import ita_primary_data from "../result/announce_next_tour_ita.json"
import fr_primary_data from "../result/announce_next_tour_fr.json"
import por_primary_data from "../result/announce_next_tour_por.json"
import en_secondary_data from "../result/announce_next_tour_enB.json"
import es_secondary_data from "../result/announce_next_tour_esB.json"
import ger_secondary_data from "../result/announce_next_tour_gerB.json"
import fr_secondary_data from "../result/announce_next_tour_frB.json"
import ita_secondary_data from "../result/announce_next_tour_itaB.json"
import hol_primary_data from "../result/announce_next_tour_hol.json"

const Paged = () => {
    return (
        <Routes>
            <Route path='*' exact element={<Main/>}/>
            <Route path='/england_league' element={<EnglandPrimer data={en_primary_data}/>}/>
            <Route path='/spain_league' element={<SpainPrimer data={es_primary_data}/>}/>
            <Route path='/germany_league' element={<GermanyPrimer data={ger_primary_data}/>}/>
            <Route path='/italy_league' element={<ItalyPrimer data={ita_primary_data}/>}/>
            <Route path='/france_league' element={<FrancePrimer data={fr_primary_data}/>}/>
            <Route path='/portugal_league' element={<PortugalPrimer data={por_primary_data}/>}/>
            <Route path='/championship_league' element={<EnglandSecondary data={en_secondary_data}/>}/>
            <Route path='/segundo_league' element={<SpainSecondary data={es_secondary_data}/>}/>
            <Route path='/germany_b_league' element={<GermanySecondary data={ger_secondary_data}/>}/>
            <Route path='/france_b_league' element={<FranceSecondary data={fr_secondary_data}/>}/>
            <Route path='/italy_b_league' element={<ItalySecondary data={ita_secondary_data}/>}/>
            <Route path='/holland_league' element={<HollandPrimer data={hol_primary_data}/>}/>
        </Routes>
    );
};

export default Paged;