# 删除index
curl -XDELETE localhost:9200/btsong

# 查看当前所有的index
curl 106.75.97.4:9200/_cat/indices?v

# 查看某index mapping
curl -XGET 106.75.97.4:9200/song/_mapping?pretty

# 创建index song 和 type song
curl -X PUT http://localhost:9200/song -d'{
"mappings": {
    	 "song": {
          	"properties": {
                "id": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
            	"title": {
                	"index": "analyzed",
                	"type": "keyword"
              },
            	"name": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "artist": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "artist_id": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "remark": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "duration": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "krc": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "bitrate": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "size": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "hash": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "hash320": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "bthash": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "btname": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "source": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "source_id": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "label": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "state": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "create_time": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "update_time": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "suggest" : {
	              "type" : "completion",
	              "analyzer" : "simple",
	              "search_analyzer" : "simple"
            }
          }
    }
}
}'

curl -X PUT http://localhost:9200/btsong -d'{
"mappings": {
    	 "btsong": {
          	"properties": {
            	"id": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
            	"title": {
                	"index": "analyzed",
                	"type": "keyword"
              },
            	"name": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "artist": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "artist_id": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "remark": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "duration": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "bitrate": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "size": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "hash": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "hash320": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "source": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "source_id": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "label": {
                  	"index": "analyzed",
                  	"type": "keyword"
              },
              "state": {
                  	"index": "analyzed",
                  	"type": "integer"
              },
              "create_time": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "update_time": {
                  	"index": "analyzed",
                  	"type": "string"
              },
              "suggest" : {
	              "type" : "completion",
	              "analyzer" : "simple",
	              "search_analyzer" : "simple"
            }
          }
    }
}
}'

# an example of query clauses being used in query and filter context in the search API
# https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html
GET /_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title":   "Search"        }},
        { "match": { "content": "Elasticsearch" }}
      ],
      "filter": [
        { "term":  { "status": "published" }},
        { "range": { "publish_date": { "gte": "2015-01-01" }}}
      ]
    }
  }
}

# Match All Query
# The most simple query, which matches all documents, giving them all a _score of 1.0.
GET /_search
{
    "query": {
        "match_all": {}
    }
}
# The _score can be changed with the boost parameter:
GET /_search
{
    "query": {
        "match_all": { "boost" : 1.2 }
    }
}


# Match Queryedit
# match queries accept text/numerics/dates, analyzes them, and constructs a query. For example:
GET /_search
{
    "query": {
        "match": {
            "message": "this is a test"
        }
    }
}

# The multi_match query builds on the match query to allow multi-field queries:
GET /_search
{
  "query": {
    "multi_match" : {
      "query": "this is a test",
      "fields": [ "subject", "message" ]
    }
  }
}

# A query that uses a query parser in order to parse its content. Here is an example:
GET /_search
{
    "query": {
        "query_string" : {
            "default_field" : "content",
            "query" : "this AND that OR thus"
        }
    }
}
