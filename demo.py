# -*- coding:utf-8-*-

import pandas as pd
from numpy import log
from itertools import izip_longest    # zip_longest -> Python 3, izip_longest -> Python 2


def main():
    data = pd.read_table('./demo.txt', index_col=["Name"])
    # data = pd.read_table('./demo.txt', usecols=['Cp'])
    # data_list = data.values.tolist()
    # data_list_1 = data[0:25]
    list1 = data[['Cp']].T.to_dict()

    # total = list1['Sample 1']['Cp'] + list1['Sample 25']['Cp'] + list1['Sample 49']['Cp']

    # i = 1  j= i + 24  z = i + 2*24
    demo = []
    j = 24
    z = 1
    o = 0
    while z < j + 1:
        Sample_1 = 'Sample ' + str(z)
        Sample_2 = 'Sample ' + str(z+24)
        Sample_3 = 'Sample ' + str(z+48)

        total = list1[Sample_1]['Cp'] + list1[Sample_2]['Cp'] + list1[Sample_3]['Cp']
        average = total/3

        demo.append(average)

        z = z + 1

        if z > j:
            if z < 312:
                z = 24 * (o+3) + 1
                j = 24 * (o+4)
                o = o + 3

    chunk_list = lambda a_list, n: izip_longest(*[iter(a_list)]*n)
    result_groups = list(chunk_list([x for x in demo], 12))

    print result_groups

if __name__ == '__main__':
    main()
