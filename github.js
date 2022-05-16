class Github {
    constructor() {
        this.client_id = '48dad3dd2dd1667d487c';
        this.client_secret = '2253891928cb8e04a548b3a5eef05d910f535a6a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
   async getUser(user) {
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
     
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
     
       const profile = await profileResponse.json();

       const repos = await repoResponse.json();
       
       return {
           profile,
           repos
       } 
   } 
}