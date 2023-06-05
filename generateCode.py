labels = ['/Kodikon1','/Kodikon2','/Cipher','/Spark']
# images = ['/image1','/image2','/image3']
list = []
for i in labels:
    for j in range(0,13):
        list.append(f'{i}/image{j}.jpeg')
    print(list)
    print('\n\n')

