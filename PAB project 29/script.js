// Selecting the form and input elements
const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const main = document.getElementById('main');

// Function to fetch user data from GitHub API
async function getUserData(username) {
    try { //try to execute the code that might throw an error
        const response = await axios.get(`https://api.github.com/users/${username}`);
        displayUserProfile(response.data); //data fetched successfully, this function is called to display the user profile
    } catch (error) { //if something goes on in try, handle it and prevent the page from crashing
        if (error.response) { //error message is shown when user doesn't exist
            // If user is not found
            main.innerHTML = `<h2>User not found</h2>`; //if user isn't found then its displayed in the main area
        } else {
            console.error("Error fetching user data", error); //it logs any other error to the console
        }
    }
}

// Function to display user profile data
function displayUserProfile(user) { //displays profile data on the page
    // Create user profile element
    const userElement = document.createElement('div'); //creates new div element to contain user profile details
    userElement.classList.add('profile'); //adds the class profile to the newly created div

    //template literal that dynamically generates html content for the user profile`
    userElement.innerHTML = `
        <div class="profile-info">
            <img src="${user.avatar_url}" alt="Avatar" class="avatar">  
            <h3>${user.name || user.login}</h3>
            <p>${user.bio || 'No bio available'}</p> 
            <p><strong>Followers:</strong> ${user.followers}</p>
            <p><strong>Following:</strong> ${user.following}</p>
            <p><strong>Public Repos:</strong> ${user.public_repos}</p>
            <p><strong>Location:</strong> ${user.location || 'N/A'}</p>
            <a href="${user.html_url}" target="_blank">View Profile on GitHub</a>
        </div>
    `;
    
    // Append the user profile to the main content area
    main.innerHTML = ''; // Clear previous results
    main.appendChild(userElement); //appends a newly created user profile element to the main content area
}

// Form submit event to handle user search
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the default behavior of the form, which would normally cause a page reload.
    const username = searchInput.value.trim(); //gets the value entered by the user in the search input and trims any extra spaces
    if (username) {
        getUserData(username); //fetches data for the username from the Github API
    } else {
        main.innerHTML = '<h2>Please enter a GitHub username</h2>'; //enter username in main content area when username is empty
    }
});
