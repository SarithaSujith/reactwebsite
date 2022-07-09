import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <span className="footericons">
          {" "}
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png"
            }
            alt=""
          />{" "}
        </span>
        <span className="footericons">
          {" "}
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg"
            }
            alt=""
          />{" "}
        </span>
        <span className="footericons">
          <img
            src={
              "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            }
            alt=""
          />
        </span>
      </div>
      <p>&copy;2022 Italianopizzario.com</p>
    </div>
  );
}
export default Footer;
