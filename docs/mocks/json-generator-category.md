# JSON Generator

## Schema Category

```json
[
    "{{repeat(100)}}",
    {
        "id": "{{index() + 1}}",
        "count": "{{integer(1, 100)}}",
        "description": "{{lorem(1, 'sentences')}}",
        "link": "http://example.com/category/category-{{index() + 1}}/",
        "name": "{{lorem(1, 'words')}}",
        "slug": "category-{{index() + 1}}",
        "taxonomy": "category",
        "parent": "{{random([0, 0, 0, 0, 1, 2, 3])}}",
        "meta": {
            "_yoast_wpseo_content_score": "{{integer(10, 90)}}",
            "_yoast_wpseo_focuskw": "{{lorem(1, 'words')}}",
            "_yoast_wpseo_title": "{{lorem(1, 'words')}} - Mijn Site Naam",
            "_yoast_wpseo_metadesc": "{{lorem(1, 'sentences')}}",
            "_yoast_wpseo_canonical": "http://example.com/category/category-{{index() + 1}}/",
            "_yoast_wpseo_opengraph-title": "{{lorem(1, 'words')}} - Mijn Site Naam",
            "_yoast_wpseo_opengraph-description": "{{lorem(1, 'sentences')}}"
        }
    }
]
```
