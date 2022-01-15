class Github {
    constructor() {
        this.CLIENT_ID = CLIENT_ID;
        this.CLIENT_SECRET = CLIENT_SECRET;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}