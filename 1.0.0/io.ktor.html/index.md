---
title: io.ktor.html - 
layout: api
---



## Package io.ktor.html

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-html-content/index.html">HtmlContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HtmlContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a></code></div>

Represents an <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> using <code>kotlinx.html</code> builder.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-placeholder/index.html">Placeholder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Placeholder</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span></code></div>

A placeholder that is inserted inside <a href="-placeholder/index.html#TOuter">TOuter</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-placeholder-item/index.html">PlaceholderItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">PlaceholderItem</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-placeholder/index.html"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="-placeholder-item/index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span></code></div>

Item of a placeholder list when it is expanded


</td>
</tr>
<tr>
<td markdown="1">

<a href="-placeholder-list/index.html">PlaceholderList</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">PlaceholderList</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">, </span><span class="identifier">TInner</span><span class="symbol">&gt;</span></code></div>

Placeholder that can appear multiple times


</td>
</tr>
<tr>
<td markdown="1">

<a href="-template/index.html">Template</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Template</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">TOuter</span><span class="symbol">&gt;</span></code></div>

A template that expands inside <a href="-template/index.html#TOuter">TOuter</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-template-placeholder/index.html">TemplatePlaceholder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">TemplatePlaceholder</span><span class="symbol">&lt;</span><span class="identifier">TTemplate</span><span class="symbol">&gt;</span></code></div>

A placeholder that is also a template


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="each.html">each</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">, </span><span class="identifier">TInner</span><span class="symbol">&gt;</span> <a href="each.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="identifier">each</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$each(io.ktor.html.each.TOuter, io.ktor.html.PlaceholderList((io.ktor.html.each.TOuter, io.ktor.html.each.TInner)), kotlin.Function2((io.ktor.html.each.TOuter, io.ktor.html.PlaceholderItem((io.ktor.html.each.TInner)), kotlin.Unit)))/items">items</span><span class="symbol">:</span>&nbsp;<a href="-placeholder-list/index.html"><span class="identifier">PlaceholderList</span></a><span class="symbol">&lt;</span><a href="each.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">,</span>&nbsp;<a href="each.html#TInner"><span class="identifier">TInner</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$each(io.ktor.html.each.TOuter, io.ktor.html.PlaceholderList((io.ktor.html.each.TOuter, io.ktor.html.each.TInner)), kotlin.Function2((io.ktor.html.each.TOuter, io.ktor.html.PlaceholderItem((io.ktor.html.each.TInner)), kotlin.Unit)))/itemTemplate">itemTemplate</span><span class="symbol">:</span>&nbsp;<a href="each.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="-placeholder-item/index.html"><span class="identifier">PlaceholderItem</span></a><span class="symbol">&lt;</span><a href="each.html#TInner"><span class="identifier">TInner</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts every element of placeholder list


</td>
</tr>
<tr>
<td markdown="1">

<a href="insert.html">insert</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span> <a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="identifier">insert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$insert(io.ktor.html.insert.TOuter, io.ktor.html.Placeholder((io.ktor.html.insert.TOuter)))/placeholder">placeholder</span><span class="symbol">:</span>&nbsp;<a href="-placeholder/index.html"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts placeholder

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TTemplate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-template/index.html"><span class="identifier">Template</span></a><span class="symbol">&lt;</span><a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">TOuter</span><span class="symbol">&gt;</span> <a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="identifier">insert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$insert(io.ktor.html.insert.TOuter, io.ktor.html.insert.TTemplate, io.ktor.html.TemplatePlaceholder((io.ktor.html.insert.TTemplate)))/template">template</span><span class="symbol">:</span>&nbsp;<a href="insert.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$insert(io.ktor.html.insert.TOuter, io.ktor.html.insert.TTemplate, io.ktor.html.TemplatePlaceholder((io.ktor.html.insert.TTemplate)))/placeholder">placeholder</span><span class="symbol">:</span>&nbsp;<a href="-template-placeholder/index.html"><span class="identifier">TemplatePlaceholder</span></a><span class="symbol">&lt;</span><a href="insert.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">, </span><span class="identifier">TTemplate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-template/index.html"><span class="identifier">Template</span></a><span class="symbol">&lt;</span><a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="insert.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="identifier">insert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$insert(io.ktor.html.insert.TOuter, io.ktor.html.insert.TTemplate, kotlin.Function1((io.ktor.html.insert.TTemplate, kotlin.Unit)))/template">template</span><span class="symbol">:</span>&nbsp;<a href="insert.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$insert(io.ktor.html.insert.TOuter, io.ktor.html.insert.TTemplate, kotlin.Function1((io.ktor.html.insert.TTemplate, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="insert.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-html.html">respondHtml</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondHtml</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">HTML</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a HTML response, using specified <a href="respond-html.html#io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</a> to build an HTML page


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-html-template.html">respondHtmlTemplate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TTemplate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-template/index.html"><span class="identifier">Template</span></a><span class="symbol">&lt;</span><span class="identifier">HTML</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondHtmlTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/template">template</span><span class="symbol">:</span>&nbsp;<a href="respond-html-template.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="respond-html-template.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
