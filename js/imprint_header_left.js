/**
* @package imprint an ownCloud app
* @category base
* @author Christian Reiner
* @copyright 2012-2013 Christian Reiner <foss@christian-reiner.info>
* @license GNU Affero General Public license (AGPL)
* @link information http://apps.owncloud.com/content/show.php?content=153220
* @link repository https://svn.christian-reiner.info/svn/app/oc/imprint
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
* License as published by the Free Software Foundation; either
* version 3 of the license, or any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU AFFERO GENERAL PUBLIC LICENSE for more details.
*
* You should have received a copy of the GNU Affero General Public
* License along with this library.
* If not, see <http://www.gnu.org/licenses/>.
*
*/

/**
 * @file js/imprint_header_left.js
 * @brief Client side activity library
 * @author Christian Reiner
 */
$(document).ready(function(){
	var anchor=$('<a />');
	anchor.attr('href',OC.linkTo('imprint','index.php'));
	anchor.text(t("imprint","Legal notice"));
	anchor.addClass('imprint-anchor').addClass('header-left');
	$('#header #owncloud').after(anchor);
})
