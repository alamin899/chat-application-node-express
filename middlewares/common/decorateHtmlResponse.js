/** amra function er bitore middleware return korechi
 * karon mara jani router a path er por amra middleware dite pari but middleware a data direct pass korte pari na
 * tar jonno oikhan theke function er bitore title pass kore then middleware return korechi
 * ebon amra local a html true kore diyechi tai error handling er somoy html true pele html akare error dibe
 */
function decorateHtmlResponse(page_title) {
    return function (req, res, next) {
      res.locals.html = true;
      res.locals.title = `${page_title} - ${process.env.APP_NAME}`;

      /** amra logged in er por nicher agula variable pathiyechi controller theke
       * tai jehetu ata first middleware default hisebe empty object rekhay diyechi
       * jate kore error na hoy
       */
      res.locals.loggedInUser = {};
      res.locals.errors = {};
      res.locals.data = {};
      
      next();
    };
  }
  
module.exports = decorateHtmlResponse;