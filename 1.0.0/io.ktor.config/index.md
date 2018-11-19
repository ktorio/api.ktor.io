---
title: io.ktor.config - 
layout: api
---



## Package io.ktor.config

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-config/index.html">ApplicationConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationConfig</span></code></div>

Represents an application config node


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-config-value/index.html">ApplicationConfigValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationConfigValue</span></code></div>

Represents an application config value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-hocon-application-config/index.html">HoconApplicationConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HoconApplicationConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Implements <a href="-application-config/index.html">ApplicationConfig</a> by loading configuration from HOCON data structures


</td>
</tr>
<tr>
<td markdown="1">

<a href="-map-application-config/index.html">MapApplicationConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MapApplicationConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Mutable application config backed by a hash map


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-configuration-exception/index.html">ApplicationConfigurationException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationConfigurationException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Thrown when an application is misconfigured


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="com.typesafe.config.-config/index.html">com.typesafe.config.Config</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>
