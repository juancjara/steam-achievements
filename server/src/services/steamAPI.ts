import steamAPI from 'steamapi';

const steam = new steamAPI(process.env.STEAM_API_KEY);

const getUser = (userId: string) => {};

const getUserSummary = (userId: string) => steam.getUserSummary(userId);

export default {
  getUser,
  getUserSummary,
};
