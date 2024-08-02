import requests
import pandas as pd

response = requests.get('http://localhost:5000/books')
books = response.json()

df = pd.DataFrame(books)
report = df[['name', 'stock']].sort_values(by='stock')

report.to_csv('book_stock_report.csv', index=False)
print("Relatório gerado: book_stock_report.csv")
