# Bootstrap 解析
----
## 第一讲：栅格

### 什么是栅格？

> [概念](http://ued.taobao.org/blog/2008/09/grid_systems/ "概念")<br>

> ![栅格](images/img-001.png "栅格")

### Bootstrap 栅格系统

<div class="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
        <tr>
            <th></th>
            <th>
                超小屏幕
                <small>手机 (&lt;768px)</small>
            </th>
            <th>
                小屏幕
                <small>平板 (≥768px)</small>
            </th>
            <th>
                中等屏幕
                <small>桌面显示器 (≥992px)</small>
            </th>
            <th>
                大屏幕
                <small>大桌面显示器 (≥1200px)</small>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th class="text-nowrap" scope="row">栅格系统行为</th>
            <td>总是水平排列</td>
            <td colspan="3">开始是堆叠在一起的，当大于这些阈值时将变为水平排列C</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row"><code>.container</code> 最大宽度</th>
            <td>None （自动）</td>
            <td>750px</td>
            <td>970px</td>
            <td>1170px</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">类前缀</th>
            <td><code>.col-xs-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">列（column）数</th>
            <td colspan="4">12</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">最大列（column）宽</th>
            <td class="text-muted">自动</td>
            <td>~62px</td>
            <td>~81px</td>
            <td>~97px</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">槽（gutter）宽</th>
            <td colspan="4">30px （每列左右均有 15px）</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">可嵌套</th>
            <td colspan="4">是</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">偏移（Offsets）</th>
            <td colspan="4">是</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">列排序</th>
            <td colspan="4">是</td>
        </tr>
        </tbody>
    </table>
</div>
