import React,{useState}from 'react';
function Post(){
    const[LCount, setLCount]= useState(0)
    const[CCount, setCCount]= useState(0)
    const[SCount, setSCount]= useState(0)
    const like=()=>{
        setLCount(LCount+1)
    }
    const comment=()=>{
        setCCount(CCount+1)
    }
    const share=()=>{
        setSCount(SCount+1)
    }
    return(
        <header>
            <style>
                {`body{background-color: white}`}
                {`span{padding:20px;user-select:none}`}
                {`row1{display:flex;flex-direction:row;justify-content:center;height:auto}`}
                {`#post{padding:10px; width:350px;height:350px;background-color:#f7e8da;text-align:center}`}
            </style>
            <row1>
        <div id="abc">
            <div id="post">
            <img src="https://i.pinimg.com/564x/34/f4/9b/34f49b4479b872a4bb068b1b8e2be456.jpg" width="300px" height="300px" /><br></br>
            <span onClick={like}>❤️</span>
            {LCount}
            <span onClick={share}>📤</span>
            {SCount}
            <span onClick={comment}>💭</span>
            {CCount}
            </div>
        </div>
         <div id="abc">
            <div id="post">
            <img src="https://i.pinimg.com/736x/11/5c/bd/115cbd381fb073aed26ce2203be3ef6d.jpg" width="300px" height="300px" /><br></br>
            <span onClick={like}>❤️</span>
            {LCount}
            <span onClick={share}>📤</span>
            {SCount}
            <span onClick={comment}>💭</span>
            {CCount}
            </div>
        </div> 
         <div id="abc">
            <div id="post">
            <img src="https://i.pinimg.com/564x/a2/31/82/a231825e90ed4409c38851ff8301630d.jpg" width="300px" height="300px" /><br></br>
            <span onClick={like}>❤️</span>
            {LCount}
            <span onClick={share}>📤</span>
            {SCount}
            <span onClick={comment}>💭</span>
            {CCount}
            </div>
        </div>
        <div id="abc">
            <div id="post">
            <img src="https://i.pinimg.com/564x/11/de/fc/11defc17b380ab9fe1861cd0aa817dc2.jpg" width="300px" height="300px" /><br></br>
            <span onClick={like}>❤️</span>
            {LCount}
            <span onClick={share}>📤</span>
            {SCount}
            <span onClick={comment}>💭</span>
            {CCount}
            </div>
        </div>
        
        </row1>
        </header>
    )
}
export default Post;
