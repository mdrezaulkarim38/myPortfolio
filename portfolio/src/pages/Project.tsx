import BackgroundImage from "./../assets/backgroundImage.jpg";

function Project() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-center pt-25 pb-10"
        style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-opacity duration-1000">
                <h2>Projects</h2>
            </div>
        </section>
    );
}

export default Project;