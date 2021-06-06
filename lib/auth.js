module.exports = {
    isOwner:function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
      console.log(request.user);
        var authStatusUI = ''
        if (this.isOwner(request, response)) {
            authStatusUI = `${request.user.nickname}`;
        }
        return authStatusUI;
    }
}

// &nbsp;| &nbsp; <a href="/login/logout">logout</a>