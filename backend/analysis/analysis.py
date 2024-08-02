import sys
import json

def analyze_inventory(data):
    category_stock = {}
    author_stock = {}

    for item in data:
        if item['category'] not in category_stock:
            category_stock[item['category']] = 0
        category_stock[item['category']] += item['stock']

        if item['author'] not in author_stock:
            author_stock[item['author']] = 0
        author_stock[item['author']] += item['stock']

    return {
        'category_stock': category_stock,
        'author_stock': author_stock
    }

if __name__ == "__main__":
    input_data = sys.stdin.read()
    
    try:
        data = json.loads(input_data)
        if not isinstance(data, list):
            raise ValueError("O JSON deve ser uma lista de itens")
    except (json.JSONDecodeError, ValueError) as e:
        print(f"Erro ao decodificar JSON: {e}", file=sys.stderr)
        sys.exit(1)
    
    result = analyze_inventory(data)
    
    print(json.dumps(result))
