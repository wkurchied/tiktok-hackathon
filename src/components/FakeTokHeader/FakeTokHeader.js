import "./FakeTokHeader.css";

function FakeTokHeader() {
    return ( 
        <div className="FakeTokHeader">
            <img className="FakeTokLogo" alt="logo" src={require('../../assets/logo.png')} />
            <h1 className="FakeTokHeaderTitle">FakeTok</h1>
        </div>
     );
}

export default FakeTokHeader;