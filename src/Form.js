import './Form.css';

function Form(){
    return (
        <div className="login-box">
            <form>
            <div className="user-box">
                <input type="text" name="" required="" />
                <label><h1>What's on your mind?</h1></label>
            </div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
            </form>
        </div>

    );
}

export default Form;