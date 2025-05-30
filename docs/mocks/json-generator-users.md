# JSON Generator

## Schema Users

```json
[
    "{{repeat(100)}}",
    {
        "id": "{{index() + 1}}",
        "name": "User {{index() + 1}}",
        "url": "",
        "description": "",
        "link": "http://example.com/author/user-{{index() + 1}}/",
        "slug": "user-{{index() + 1}}",
        "avatar_urls": {
            "24": "http://0.gravatar.com/avatar/?s=24&d=mm&r=g",
            "48": "http://0.gravatar.com/avatar/?s=48&d=mm&r=g",
            "96": "http://0.gravatar.com/avatar/?s=96&d=mm&r=g"
        },
        "meta": {
            "nickname": "",
            "first_name": "{{firstName()}}",
            "last_name": "{{surname()}}",
            "description": "",
            "rich_editing": "true",
            "syntax_highlighting": "true",
            "comment_shortcuts": "false",
            "admin_color": "fresh",
            "use_ssl": "0",
            "show_admin_bar_front": "true",
            "locale": "",
            "wp_capabilities": "{{random(['a:1:{s:10:\"subscriber\";b:1;}', 'a:1:{s:6:\"author\";b:1;}', 'a:1:{s:6:\"editor\";b:1;}', 'a:1:{s:13:\"administrator\";b:1;}'])}}",
            "wp_user_level": "{{random(['0', '1', '2', '7', '10'])}}",
            "dismissed_wp_pointers": "",
            "show_welcome_panel": "1",
            "session_tokens": ""
        }
    }
]
```
