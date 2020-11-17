export const aboutPage = (req, res, next) => {
  res.render('layout', {content: 'about', title: 'Top 10 Movies'})
}