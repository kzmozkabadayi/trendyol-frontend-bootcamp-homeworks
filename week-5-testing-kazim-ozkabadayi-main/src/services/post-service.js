export class PostService {
    constructor(postProvider) {
      this.postProvider = postProvider;
    }
  
    async findMostFrequentPostingUserTitle() {
      const posts = await this.postProvider.getPosts();
      let countPropertyValues = {};
  
      posts.forEach(function (obj) {
        if (countPropertyValues.hasOwnProperty(obj.userId)) {
          countPropertyValues[obj.userId]++;
        } else {
          countPropertyValues[obj.userId] = 1;
        }
      });

      let maxPropertyOccurence = 0;
      let maxPropertyValue;
  
      for (let property in countPropertyValues) {
        if (countPropertyValues[property] > maxPropertyOccurence) {
          maxPropertyOccurence = countPropertyValues[property];
          maxPropertyValue = property;
        }
      }

      let mostFrequentUserPostTitles = posts.filter((item) => {
          if(item.userId == maxPropertyValue){
              return item.title
          }
      }).map((item) => {
            return item.title
      });
  
      return mostFrequentUserPostTitles;
    }
  }
  