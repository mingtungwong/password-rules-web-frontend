import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h3>Welcome to Password Rules</h3>
                <p className="textBlock">
                    Password Rules is a website where users can submit password requirements for websites that they use.
                    Oftentimes password requirements only differ slightly among websites. One may require a special character,
                    while another may forbid it. When that occurs, it may not be worth the hassle to have the entire password
                    reset for a one time login rather than seeing the rules and possibly remembering that password. Constantly
                    resetting the password only prolongs the problem rather than fixing it.
                </p>
            </div>
        )
    }
}

export default Home;