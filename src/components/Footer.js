const Footer=()=>{
    const currentDate = new Date();
    const year =currentDate.getFullYear();
    return(
        <footer>
            <span>Made with ❤</span>
         <p> Copyright {year}</p>
        </footer>
    );
}

export default Footer