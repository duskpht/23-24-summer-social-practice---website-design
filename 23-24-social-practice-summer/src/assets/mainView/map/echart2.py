#import sys
#sys.path.append("E:\\各种软件\\python\\Lib\\site-packages")
import pyecharts
from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.globals import ChartType, SymbolType


data = [
    ('2010-2020', '南京', '九江', 100000),
    ('2010-2020', '九江', '武汉', 100000),
    ('2010-2020', '武汉', '宜昌', 100000),
    ('2010-2020', '宜昌', '重庆', 100000),
    ('2010-2020', '重庆', '成都', 100000),
]

country_coords = {
    "南京": [118.7915, 32.0615],
    "九江": [115.9475, 29.6654],
    "武汉": [114.2654, 30.6041],
    "宜昌": [111.2811, 30.6947],
    "重庆": [106.5479, 29.5647],
    "成都": [104.0667, 30.6667],
}

geo = (
    Geo()
    .add_schema(maptype="china")
    .set_global_opts(
        title_opts=opts.TitleOpts(title="西迁行迹路线图")
    )
)

for country, coord in country_coords.items():
    geo.add_coordinate(country, *coord)

lines_data = list(zip([item[1] for item in data], [item[2] for item in data]))
lines_value = [item[3] for item in data]

geo.add(
    "flows",
    lines_data, 
    type_=ChartType.LINES,
    effect_opts=opts.EffectOpts(symbol=SymbolType.ARROW, symbol_size=6, color="blue", period=3),
    linestyle_opts=opts.LineStyleOpts(curve=0.2, opacity=0.6),
)

all_countries = set(item[1] for item in data) | set(item[2] for item in data)
scatter_data = [("南京", 0),("九江",0),("武汉",0),("宜昌",0),("重庆",0),("成都",0) ]
geo.add(
    "",
    scatter_data,
    type_=ChartType.EFFECT_SCATTER,
    label_opts=opts.LabelOpts(is_show=True, position="right", formatter="{b}"),
    itemstyle_opts=opts.ItemStyleOpts(color="red", border_color="black", border_width=1)
)

geo.render('scientist_mobility.html')