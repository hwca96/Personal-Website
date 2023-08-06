function SocialTabs() {
    return (
        <div className="icon-bar" style={{zIndex: 1}}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          <a href="https://www.linkedin.com/in/wu-harvey" target="_blank" className="linkedin">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/hwca96" target="_blank" className="github">
            <i className="fa fa-github"></i>
          </a>
          <a href="mailto:hwca96@gmail.com" target="_blank" className="email">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
    )
}

export default SocialTabs