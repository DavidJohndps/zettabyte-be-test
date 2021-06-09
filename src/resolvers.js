const Article = require("./models/Articles");
const Comment = require("./models/Comments");

const resolvers = {
  Query: {
    Articles: async () => {
      try {
        const articles = await Article.find();
        return articles.map((article) => {
          let comments = Comment.find({ articleId: article._id });
          // comments = comments.map(comment => {return {_id: comment._id, text: comment.text}})
          console.log(typeof comments);
          return {
            _id: article._id,
            text: article.text,
            comments: comments,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    Comments: () => Comment.find(),
  },
  Mutation: {
    createArticle: async (_, { text }) => {
      try {
        const article = new Article({ text: text });
        await article.save();
        return article;
      } catch (error) {
        console.log(error);
      }
    },
    updateArticle: async (_, { _id, text }) => {
      try {
        const article = await Article.find({ _id: _id })
          .update({ text: text })
          .exec();
        return {
          _id: _id,
          text: article.text,
        };
      } catch (error) {
        console.log(error);
      }
    },
    deleteArticle: async (_, { _id }) => {
      try {
        const article = await Article.deleteOne({ _id: _id });
        await Comment.deleteMany({ articleId: _id });
        return {
          _id: _id,
          text: article.text,
        };
      } catch (error) {
        console.log(error);
      }
    },
    createComment: async (_, { text, articleId }) => {
      try {
        const comment = new Comment({ text: text, articleId: articleId });
        await comment.save();
        return comment;
      } catch (error) {
        console.log(error);
      }
    },
    updateComment: async (_, { _id, text }) => {
      try {
        const comment = await Comment.find({ _id: _id })
          .update({ text: text })
          .exec();
        return {
          _id: _id,
          text: comment.text,
        };
      } catch (error) {
        console.log(error);
      }
    },
    deleteComment: async (_, { _id }) => {
      try {
        const comment = await Comment.deleteOne({ _id: _id });
        return {
          _id: _id,
          text: comment.text,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
