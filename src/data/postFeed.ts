import { action, computed, observable } from 'mobx';

export interface IPostFeedStore {
  userPhoto: string;
  firstName: string;
  lastName: string;
  postID: number;
  postPhoto: string;
  likes: number;
}

class PostFeed {
  @observable posts: Array<IPostFeedStore> = [];
  @observable savedPosts: Array<number>;

  constructor() {
    this.posts.push({
      firstName: 'Anna',
      lastName: 'Mar',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 1,
      postPhoto:
        'https://i0.wp.com/designandroses.com/wp-content/uploads/2020/08/3c6a6851f473a5deee89c5ba5ba7eafb-1.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Alina',
      lastName: 'Lee',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 3,
      postPhoto:
        'https://i.pinimg.com/736x/62/c8/d6/62c8d65f70151d6ba55bd18b4ccfd98e.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Belle',
      lastName: 'Lucia',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 4,
      postPhoto:
        'https://pressa.tv/uploads/posts/2019-06/thumbs/1559744260_pressa_tv_belle_lucia_56702415_133014014480190_3740972616302811454_n.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Anna',
      lastName: 'Mar',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 2,
      postPhoto: 'https://i.ebayimg.com/images/g/114AAOSwGD9exDVb/s-l1600.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Belle',
      lastName: 'Lucia',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 5,
      postPhoto:
        'https://pressa.tv/uploads/posts/2019-06/thumbs/1559744260_pressa_tv_belle_lucia_56702415_133014014480190_3740972616302811454_n.jpg',
      likes: 321,
    });
    this.posts.push({
      firstName: 'Belle',
      lastName: 'Lucia',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 6,
      postPhoto:
        'https://i.pinimg.com/736x/62/c8/d6/62c8d65f70151d6ba55bd18b4ccfd98e.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Belle',
      lastName: 'Lucia',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 7,
      postPhoto:
        'https://pressa.tv/uploads/posts/2019-06/thumbs/1559744260_pressa_tv_belle_lucia_56702415_133014014480190_3740972616302811454_n.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Alina',
      lastName: 'Lee',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 8,
      postPhoto:
        'https://i.pinimg.com/736x/62/c8/d6/62c8d65f70151d6ba55bd18b4ccfd98e.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Anna',
      lastName: 'Mar',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 9,
      postPhoto:
        'https://i0.wp.com/designandroses.com/wp-content/uploads/2020/08/3c6a6851f473a5deee89c5ba5ba7eafb-1.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Belle',
      lastName: 'Lucia',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 10,
      postPhoto:
        'https://pressa.tv/uploads/posts/2019-06/thumbs/1559744260_pressa_tv_belle_lucia_56702415_133014014480190_3740972616302811454_n.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Anna',
      lastName: 'Mar',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 11,
      postPhoto:
        'https://i0.wp.com/designandroses.com/wp-content/uploads/2020/08/3c6a6851f473a5deee89c5ba5ba7eafb-1.jpg',
      likes: 321,
    });

    this.posts.push({
      firstName: 'Alina',
      lastName: 'Lee',
      userPhoto:
        'https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg',
      postID: 12,
      postPhoto:
        'https://i.pinimg.com/736x/62/c8/d6/62c8d65f70151d6ba55bd18b4ccfd98e.jpg',
      likes: 321,
    });

    this.savedPosts = [];
  }

  @action savePost = (postID: number) => {
    this.savedPosts.push(postID);
  };
}

export const PostFeedStore = new PostFeed();
