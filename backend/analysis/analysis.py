import sys
import json

def analyze_inventory(data):
    # Inicialize os dicionários para armazenar a análise
    category_stock = {}
    author_stock = {}

    # Analise os dados do inventário
    for item in data:
        # Processa a categoria
        if item['category'] not in category_stock:
            category_stock[item['category']] = 0
        category_stock[item['category']] += item['stock']

        # Processa o autor
        if item['author'] not in author_stock:
            author_stock[item['author']] = 0
        author_stock[item['author']] += item['stock']

    return {
        'category_stock': category_stock,
        'author_stock': author_stock
    }

if __name__ == "__main__":
    # Leia a entrada JSON
    input_data = sys.stdin.read()
    
    # Converta a string JSON em uma lista de dicionários
    try:
        data = json.loads(input_data)
        if not isinstance(data, list):
            raise ValueError("O JSON deve ser uma lista de itens")
    except (json.JSONDecodeError, ValueError) as e:
        print(f"Erro ao decodificar JSON: {e}", file=sys.stderr)
        sys.exit(1)
    
    # Realize a análise
    result = analyze_inventory(data)
    
    # Exiba o resultado como JSON
    print(json.dumps(result))
