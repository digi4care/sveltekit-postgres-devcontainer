# JSON Generator

## Schema Blog

```json
[
    "{{repeat(5, 1000)}}",
    {
        "id": "{{index()}}",
        "date": "{{date(new Date(2024, 0, 1), new Date(), 'YYYY-MM-ddThh:mm:ss')}}",
        "date_gmt": "{{date(new Date(2024, 0, 1), new Date(), 'YYYY-MM-ddThh:mm:ss')}}",
        "guid": {
            "rendered": "http://example.com/?p={{index()}}"
        },
        "modified": "{{date(new Date(2024, 0, 1), new Date(), 'YYYY-MM-ddThh:mm:ss')}}",
        "modified_gmt": "{{date(new Date(2024, 0, 1), new Date(), 'YYYY-MM-ddThh:mm:ss')}}",
        "slug": "blog-post-{{index()}}",
        "status": "{{random('publish', 'draft', 'pending', 'private', 'future', 'trash')}}",
        "type": "{{random('post', 'post', 'post', 'page', 'page', 'product', 'portfolio', 'knowledgebase', 'faq')}}",
        "link": "http://example.com/blog/blog-post-{{index()}}/",
        "title": {
            "rendered": "Blog Post {{index()}}"
        },
        "content": {
            "rendered": "<p>{{lorem(5, 'paragraphs')}}</p>",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>{{lorem(1, 'paragraphs')}}</p>",
            "protected": false
        },
        "author": "{{integer(1, 10)}}",
        "featured_media": "{{integer(0, 100)}}",
        "comment_status": "{{random('open', 'closed')}}",
        "ping_status": "{{random('open', 'closed')}}",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [
            {
                "id": 1,
                "key": "_yoast_wpseo_title",
                "value": "Blog Post {{index()}} - Mijn Site Naam"
            },
            {
                "id": 2,
                "key": "_yoast_wpseo_metadesc",
                "value": "Dit is een beschrijving voor blog post {{index()}} met belangrijke zoekwoorden."
            },
            {
                "id": 3,
                "key": "_yoast_wpseo_focuskw",
                "value": "blog post {{index()}}"
            },
            {
                "id": 4,
                "key": "_yoast_wpseo_canonical",
                "value": "http://example.com/blog/blog-post-{{index()}}/"
            },
            {
                "id": 5,
                "key": "_yoast_wpseo_opengraph-title",
                "value": "Blog Post {{index()}} - Mijn Site Naam"
            },
            {
                "id": 6,
                "key": "_yoast_wpseo_opengraph-description",
                "value": "Bekijk onze nieuwste blog post over interessante onderwerpen en updates."
            },
            {
                "id": 7,
                "key": "_yoast_wpseo_opengraph-image",
                "value": "http://placehold.it/1200x630"
            },
            {
                "id": 8,
                "key": "_yoast_wpseo_twitter-title",
                "value": "Blog Post {{index()}} - Mijn Site Naam"
            },
            {
                "id": 9,
                "key": "_yoast_wpseo_twitter-description",
                "value": "Bekijk onze nieuwste blog post! #blog #update"
            },
            {
                "id": 10,
                "key": "_yoast_wpseo_twitter-image",
                "value": "http://placehold.it/800x418"
            }
        ],
        "categories": ["{{repeat(1, 2)}}", "{{integer(1, 5)}}"],
        "tags": ["{{repeat(1, 3)}}", "{{integer(6, 15)}}"]
    }
]
```
